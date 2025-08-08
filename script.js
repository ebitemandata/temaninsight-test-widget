const widgetScript = document.querySelector(
  'script[src="https://cdn.temaninsight.com/release/latest/temaninsight-widget.min.js"]'
)

if (widgetScript) {
  const clientKey = widgetScript.getAttribute("data-client-key")
  document.getElementById("client-key-display").textContent = `data-client-key = ${clientKey}`
}