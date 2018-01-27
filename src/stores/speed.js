import { observable, action, computed } from 'mobx';

class SpeedStore {
  @observable value = 5;

  @computed
  get currentSpeed() {
    return 10 - this.value;
  }

  @computed
  get isIncreaseDisabled() {
    return this.value >= 9;
  }

  @computed
  get isDecreaseDisabled() {
    return this.value <= 1;
  }

  @action
  increase() {
    this.value += 1;
  }

  @action
  decrease() {
    this.value -= 1;
  }
}

export default new SpeedStore();
