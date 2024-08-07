import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import microApp from '@micro-zoe/micro-app'

function App() {
    microApp.setData('material_center', {
        isolationLevel: 1, // 系统数据隔离：1系统级别，2业务级别，3用户级别
        systemCode: 'jdOrange',
        businessCode: 'material',
        loginType: '7',
        extraInfo: {
            isHideBrand: true, // 可选，是否隐藏brand审核逻辑
            isHideAuditInfo: true, // 可选，是否隐藏运营审核提示语
            isMultiAudit: true, // 可选，是否可批量审核
            isExportable: true // 可选，是否可以导出列表数据
        }
    })
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <div className="container" style={{ minWidth: '1200px' }}>
                <micro-app
                    name="material_center"
                    url={'http://127.0.0.1:5173/'}
                    iframe
                    default-page={'/'}
                />
            </div>
        </>
    )
}

export default App
