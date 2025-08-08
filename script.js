const widgetScript = document.querySelector(
  'script[src="https://cdn.temaninsight.com/release/latest/temaninsight-widget.min.js"]'
)

if (widgetScript) {
  // Get the data-client-key value
  const clientKey = widgetScript.getAttribute("data-client-key")

  // Update the span content
  document.getElementById("client-key-display").textContent =
    `data-client-key = ${clientKey}`
}

let currentClientKey = null

function loadWidget(clientKey) {
  if (clientKey === currentClientKey) {
    console.log("Client key is the same — no reload needed.")
    return
  }

  const oldScript = document.querySelector(
    'script[src="https://cdn.temaninsight.com/release/latest/temaninsight-widget.min.js"]'
  )
  if (oldScript) oldScript.remove()

  const script = document.createElement("script")
  script.src = "https://cdn.temaninsight.com/release/latest/temaninsight-widget.min.js"
  script.setAttribute("data-client-key", clientKey)
  script.async = true
  document.body.appendChild(script)

  currentClientKey = clientKey
  console.log("Widget loaded with new client key:", clientKey)
}


document.getElementById("saveBtn").addEventListener("click", () => {
  const key = document.getElementById("embed").value.trim()
  if (!key) {
    alert("Please enter a client key.")
    return
  }

  const match = key.match(/data-client-key="([^"]+)"/)
  const clientKey = match ? match[1] : null

  if (!clientKey) {
    alert("'data-client-key' not found")
  } else {
    loadWidget(clientKey)
  }
})