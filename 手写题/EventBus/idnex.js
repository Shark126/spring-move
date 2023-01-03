const EventBus = {
    subs: {},
    //=>订阅消息
    on(event, fn) {
      if (!this.subs[event]) this.subs[event] = [];
      this.subs[event].push(fn);
    },
    //=>发布消息
    emit(event, ...args) {
      if (this.subs[event]) {
        this.subs[event].forEach((fn) => fn(...args));
      }
    },
    //只能执行一次
    once(event, fn) {
      const callback = (...args) => {
        fn(...args);
        this.off(event, callback);
      };
      this.on(event, callback);
    },
    //=>移除消息
    off(event, fn) {
      if (this.subs[event]) {
        const index = this.subs[event].indexOf(fn);
        if (index !== -1) this.subs[event].splice(index, 1);
      }
    },
  };