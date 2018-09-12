const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

const config = {
  src_folders: ['./test/e2e'],
  output_folder: './test/e2e/reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:8000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: false,
        path: ''
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};

module.exports = config;
