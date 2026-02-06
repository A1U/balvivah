const config = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://localhost:7234/api',
  ENDPOINTS: {
    INSERT_PLEDGE: '/PlageEntry/insert'
  }
};

export default config;