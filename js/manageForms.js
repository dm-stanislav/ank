let errorTimeout

window.manageForms = (props = {}) => {
    if (props.ok) {
        const activeModal = props.formElement.closest('.modal.active')

        if (activeModal) {
            // eslint-disable-next-line
            const instance = __Modal.getOrCreateInstance(activeModal)
            instance.hide()
        }

        props.stopValidation()
        props.formElement.reset()

        // Reloads the page in 1 second
        setTimeout(() => {
            window.location.reload()
        }, 1000)

        // Success toast usage example
        // eslint-disable-next-line
        __showToast('success-toast')
    } else {
        // Error toast usage example
        // eslint-disable-next-line
        __showToast('error-toast')

        if (errorTimeout) {
            clearTimeout(errorTimeout)
        }

        errorTimeout = setTimeout(() => {
            // eslint-disable-next-line
            __hideToast('error-toast')
        }, 5000)
    }

    return false
}
