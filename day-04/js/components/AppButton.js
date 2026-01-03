export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    processing: {
      type: Boolean,
      default: false
    }
  },
  template: `
    <button
      :class="[
        'text-white font-bold py-2 px-4 rounded',
        type === 'primary' ? 'bg-blue-500 hover:bg-blue-700' : '',
        type === 'muted' ? 'bg-gray-500 hover:bg-gray-700' : '',
        type === 'success' ? 'bg-green-500 hover:bg-green-700' : '',
        processing ? 'opacity-50 cursor-not-allowed ' : '',
        processing ? 'processing' : ''
      ]"
      :disabled="processing"
    >
       <span :class="processing ? 'text-transparent' : ''">
        <slot></slot>
      </span>
    </button>
  `
}
