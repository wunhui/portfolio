
import loading from '../styles/scss/components/common/loading.module.scss'


const Loading = () => {
    return (
    <div className={loading.loading}>
        <div className={loading.loading_wrap}>
            <div className={loading.loading_circle}></div>
            <div className={loading.loading_circle}></div>
        </div>
    </div>
    )
}

export default Loading