import axios, { AxiosInstance } from 'axios';

export interface YealinkConfig {
  ipAddress: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  code: string;
  token?: string;
  msg?: string;
}

export class YealinkAPI {
  private axiosInstance: AxiosInstance;
  private token: string | null = null;
  private tokenExpiry: Date | null = null;
  private config: YealinkConfig;

  constructor(config: YealinkConfig) {
    this.config = config;
    this.axiosInstance = axios.create({
      baseURL: `https://${config.ipAddress}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      // Allow self-signed certificates (common for local devices)
      httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false,
      }),
    });
  }

  /**
   * Authenticate with the Yealink camera and get a bearer token
   */
  async authenticate(): Promise<boolean> {
    try {
      const response = await this.axiosInstance.post<AuthResponse>(
        '/centralcontrol/authentication',
        {
          userName: this.config.username,
          passWord: this.config.password,
        }
      );

      if (response.data.code === '0' && response.data.token) {
        this.token = response.data.token;
        // Token is valid for 2 hours
        this.tokenExpiry = new Date(Date.now() + 2 * 60 * 60 * 1000);
        console.log('Yealink authentication successful');
        return true;
      } else {
        console.error('Yealink authentication failed:', response.data.msg);
        return false;
      }
    } catch (error) {
      console.error('Yealink authentication error:', error);
      return false;
    }
  }

  /**
   * Check if token is valid and refresh if needed
   */
  private async ensureAuthenticated(): Promise<boolean> {
    if (!this.token || !this.tokenExpiry || new Date() >= this.tokenExpiry) {
      return await this.authenticate();
    }
    return true;
  }

  /**
   * Make an authenticated API request
   */
  private async apiRequest<T>(
    method: 'GET' | 'POST',
    endpoint: string,
    data?: any
  ): Promise<T | null> {
    if (!(await this.ensureAuthenticated())) {
      throw new Error('Authentication failed');
    }

    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url: endpoint,
        data,
        headers: {
          Authorization: this.token!,
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        // Token expired, try to re-authenticate
        this.token = null;
        this.tokenExpiry = null;
        if (await this.ensureAuthenticated()) {
          // Retry the request
          return this.apiRequest(method, endpoint, data);
        }
      }
      console.error(`API request error (${endpoint}):`, error);
      throw error;
    }
  }

  /**
   * Move camera in a direction
   * @param direction - up, down, left, right, or stop
   * @param speed - 1-8 (optional)
   */
  async moveCamera(
    direction: 'up' | 'down' | 'left' | 'right' | 'stop',
    speed?: number
  ): Promise<void> {
    const data: any = { direction };
    if (speed !== undefined) {
      data.speed = speed;
    }
    await this.apiRequest('POST', '/centralcontrol/camera/move', data);
  }

  /**
   * Zoom camera
   * @param zoom - in, out, or stop
   * @param speed - 1-8 (optional)
   */
  async zoomCamera(
    zoom: 'in' | 'out' | 'stop',
    speed?: number
  ): Promise<void> {
    const data: any = { zoom };
    if (speed !== undefined) {
      data.speed = speed;
    }
    await this.apiRequest('POST', '/centralcontrol/camera/zoom', data);
  }

  /**
   * Set a camera preset
   * @param index - Preset number (1-10)
   */
  async setPreset(index: number): Promise<void> {
    await this.apiRequest('POST', '/centralcontrol/camera/preset', { index });
  }

  /**
   * Recall a camera preset
   * @param index - Preset number (1-10)
   */
  async recallPreset(index: number): Promise<void> {
    await this.apiRequest('POST', '/centralcontrol/camera/preset/recall', { index });
  }

  /**
   * Get camera position
   */
  async getCameraPosition(): Promise<any> {
    return await this.apiRequest('GET', '/centralcontrol/camera/position');
  }

  /**
   * Get camera status
   */
  async getCameraStatus(): Promise<any> {
    return await this.apiRequest('GET', '/centralcontrol/camera/status');
  }

  /**
   * Test connection to camera
   */
  async testConnection(): Promise<boolean> {
    try {
      return await this.authenticate();
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }
}
