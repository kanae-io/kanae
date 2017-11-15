// a.js
export app = dom("div", {})
export timeline = dom("div", { ...css })
export create_tweet = (text) => dom("div").contains(text)
app.contains(timeline)
mount(app, document.body)
// b.js
import { timeline } from ...
timeline.contains([
  create_tweet("aaa")
]).update()
