const code = {
  SUCCESS: 10000,
  NOT_LOGIN: 10001,
  ERROR: 10003
};

module.exports = class Response {
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  static success(data, msg) {
    return new Response(code.SUCCESS, msg || '请求成功', data);
  }

  static notLogin() {
    return new Response(code.NOT_LOGIN, '用户未登录');
  }

  static error(msg) {
    return new Response(code.ERROR, msg || null);
  }
};
