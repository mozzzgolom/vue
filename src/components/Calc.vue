<template>
  <div>
    <div class="display">
      <div class="strange-message">
        <template v-if="result < 0">Получилось отрицательное число</template>
        <template v-else-if="result < 100">Результат в первой сотне</template>
        <template v-else>Получилось слишком большое число</template>
      </div>
      <br />
      <div v-show="error">Ошибка! {{ error }}</div>
      <br />
      <input v-model.number="operand1" />
      <input v-model.number="operand2" />
      = {{ result }}
    </div>
    <br />
    <div class="keyboard">
      <button
        v-for="operand in operands"
        v-bind:key="operand"
        v-bind:title="operand"
        v-bind:disabled="operand1 === '' || operand2 === ''"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>
    <br />
    <div class="chekboks">
      <input type="checkbox" id="checkbox" v-model="keyboards" />
      <label> отобразить экранную клавиатуру</label>
    </div>
    <br />
    <div>
      <button for="checkbox" v-for="item in keyboards" v-bind:key="item">
        {{ item }}
      </button>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Calculator",
  data() {
    return {
      keyboards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "←"],
      operands: ["+", "-", "/", "*", "%", "^"],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      logs: {},
    };
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = operand1 / operand2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    persent() {
      this.result = this.operand1 % this.operand2;
    },
    degree() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "%":
          this.persent();
          break;
        case "^":
          this.degree();
          break;
      }
    },
  },
};
</script>