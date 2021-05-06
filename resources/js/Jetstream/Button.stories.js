import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">My button</Button>',
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
