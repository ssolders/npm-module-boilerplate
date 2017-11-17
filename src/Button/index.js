export const Button = {
  functional: true,
  props: {
    label: { type: [String], required: true },
    disabled: { type: [Boolean], required: false },
    isLoading: { type: [Boolean], required: false },
    additionalClasses: { type: [String], required: false }
  },
  render: (h, context) => {
    const { label, disabled, isLoading, additionalClasses = '' } = context.props
    const { clickHandler } = context.listeners

    return (
      <button class={`btn ${additionalClasses} ${isLoading ? 'loading' : ''}`} disabled={disabled} onClick={clickHandler}>
        {label}
      </button>
    )
  }
}
