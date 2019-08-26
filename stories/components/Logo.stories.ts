import { storiesOf } from '@storybook/vue'
import Logo from '@/components/Logo.vue'

storiesOf('components/Logo', module).add('example', () => ({
  components: { Logo },
  template: '<logo />'
}))
