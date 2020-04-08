import { Notification } from 'element-ui'

function notify(title, message, duration, type) {
    Notification({
        title: title,
        message: message,
        type: type,
        duration: duration
    });
}
const notice = {
    success(message) {
        notify("成功", message, 2000, 'success')
    },
    error(message) {
        notify("错误", message, 2000, 'error')
    },
    info(message) {
        notify("信息", message, 2000, 'info')
    }, warning(message) {
        notify("警告", message, 2000, 'warning')
    }
}
export default notice