type EventType = 'click' | 'scroll' | 'mousemove'
type excludeEvent =Exclude<EventType,'scroll'> ;//"click" | "mousemove" and removes scroll
const handelEvent = (event :excludeEvent)=>{
    console.log(event)
}

handelEvent("click")