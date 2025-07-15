// ========== 消息相关常量 ==========
export const MESSAGE_STATUS = {
  LOADING: 'loading',
  INCOMPLETE: 'incomplete',
  COMPLETE: 'complete',
  ERROR: 'error',
};

export const MESSAGE_ROLES = {
  USER: 'user',
  ASSISTANT: 'assistant',
  SYSTEM: 'system',
};

// 默认消息示例
export const DEFAULT_MESSAGES = [
  {
    role: MESSAGE_ROLES.USER,
    id: '2',
    createAt: 1715676751919,
    content: '你好',
  },
  {
    role: MESSAGE_ROLES.ASSISTANT,
    id: '3',
    createAt: 1715676751919,
    content: '你好，请问有什么可以帮助您的吗？',
    reasoningContent: '',
    isReasoningExpanded: false,
  },
];

// ========== UI 相关常量 ==========
export const DEBUG_TABS = {
  PREVIEW: 'preview',
  REQUEST: 'request',
  RESPONSE: 'response',
};

// ========== API 相关常量 ==========
export const API_ENDPOINTS = {
  CHAT_COMPLETIONS: '/pg/chat/completions',
  USER_MODELS: '/api/user/models',
  USER_GROUPS: '/api/user/self/groups',
};

// ========== 配置默认值 ==========
export const DEFAULT_CONFIG = {
  inputs: {
    model: 'gpt-4o',
    group: '',
    temperature: 0.7,
    top_p: 1,
    max_tokens: 4096,
    frequency_penalty: 0,
    presence_penalty: 0,
    seed: null,
    stream: true,
    imageEnabled: false,
    imageUrls: [''],
  },
  parameterEnabled: {
    temperature: true,
    top_p: true,
    max_tokens: false,
    frequency_penalty: true,
    presence_penalty: true,
    seed: false,
  },
  systemPrompt: '',
  showDebugPanel: false,
  customRequestMode: false,
  customRequestBody: '',
};

// ========== Regular Expressions ==========
export const THINK_TAG_REGEX = /<think>([\s\S]*?)<\/think>/g;

// ========== Error Messages ==========
export const ERROR_MESSAGES = {
  NO_TEXT_CONTENT: 'This message has no copyable text content',
  INVALID_MESSAGE_TYPE: 'Cannot copy this type of message content',
  COPY_FAILED: 'Copy failed, please manually select and copy text',
  COPY_HTTPS_REQUIRED: 'Copy function requires HTTPS environment, please copy manually',
  BROWSER_NOT_SUPPORTED: 'Browser does not support copy function, please copy manually',
  JSON_PARSE_ERROR: 'Custom request body format error, please check JSON format',
  API_REQUEST_ERROR: 'API request error occurred',
  NETWORK_ERROR: 'Network connection failed or server not responding',
};

// ========== Storage Keys ==========
export const STORAGE_KEYS = {
  CONFIG: 'playground_config',
  MESSAGES: 'playground_messages',
};