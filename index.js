const clickMeBtn = document.getElementById('clickMe')

const showConfirmationDialog = (message = '') => {
  return new Promise((resolve, reject) => {
    const existingDialog = document.getElementById('confirm-dialog')
    if (existingDialog) existingDialog.remove()

    const wrapper = document.createElement('div')
    const container = document.createElement('div')
    const content = document.createElement('div')
    const footer = document.createElement('div')
    const buttons = [
      {
        label: 'Yes',
        onclick: (txt) => {
          resolve(txt)
          container.classList.toggle('show')
          wrapper.classList.toggle('show')
        },
      },
      {
        label: 'Cancel',
        onclick: (txt) => {
          resolve(txt)
          container.classList.toggle('show')
          wrapper.classList.toggle('show')
        },
      },
    ]
    buttons.forEach((button) => {
      const buttonEle = document.createElement('button')
      buttonEle.innerText = button.label
      buttonEle.onclick = () => button.onclick(button.label)
      footer.appendChild(buttonEle)
    })

    wrapper.id = 'confirm-dialog'
    wrapper.classList = 'wrapper show'

    container.classList = 'modal show'
    content.innerText = message

    footer.classList = 'modal-footer'
    container.appendChild(content)
    container.appendChild(footer)
    wrapper.appendChild(container)
    document.body.appendChild(wrapper)
  })
}

clickMeBtn.onclick = async () => {
  const resultContainer = document.getElementById('result')
  const result = await showConfirmationDialog('Yor bruh')
  resultContainer.innerText = `You clicked ${result}`
}
