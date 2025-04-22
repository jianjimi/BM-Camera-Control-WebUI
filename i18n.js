/*      Blackmagic Camera Control WebUI
        Internationalization Support
        (c) 2024              
*/

// 默认语言设置
let currentLanguage = localStorage.getItem('uiLanguage') || 'en';

// 所有界面文本的翻译
const translations = {
    'en': {
        // 标题和页眉
        'pageTitle': 'Camera Control WebUI for Blackmagic Cameras',
        'headerTitle': 'Camera Control WebUI for Blackmagic Cameras',
        
        // 相机选择
        'cam': 'CAM',
        
        // 颜色校正
        'lift': 'Lift',
        'gamma': 'Gamma',
        'gain': 'Gain',
        'offset': 'Offset',
        'resetLift': 'Reset Lift',
        'resetGamma': 'Reset Gamma',
        'resetGain': 'Reset Gain',
        'resetOffset': 'Reset Offset',
        'setLift': 'Set Lift',
        'setGamma': 'Set Gamma',
        'setGain': 'Set Gain',
        'setOffset': 'Set Offset',
        
        // 曝光控制
        'filter': 'FILTER',
        'exposureGain': 'GAIN',
        'shutter': 'SHUTTER',
        'balance': 'BALANCE',
        'autoWhitebalance': 'Make the camera do an Auto Whitebalance',
        
        // 镜头控制
        'focus': 'FOCUS',
        'iris': 'IRIS',
        'zoom': 'ZOOM',
        'autoFocus': 'AF',
        
        // 传输控制
        'loop': 'Loop',
        'singleClip': 'Single Clip',
        'back': 'Back',
        'forward': 'Forward',
        'record': 'Record',
        'play': 'Play',
        'stop': 'Stop',
        'timecode': 'TIMECODE',
        
        // 连接与设置
        'connection': 'Connection',
        'hostname': 'Hostname',
        'connect': 'Connect',
        'useHttps': 'Use HTTPS',
        'sendApiCall': 'Send API Call',
        'requestEndpoint': 'request endpoint',
        'requestBody': 'request body',
        'sendApiRequest': 'Send API Request',
        'apiManualInfo': 'Send manual API requests using the above controls. See documentation for details.',
        
        // 预设
        'presets': 'Presets',
        'presetSelect': 'Preset Select',
        'restoreFromPreset': 'Restore from Preset',
        
        // 曝光
        'exposure': 'Exposure',
        'iso': 'ISO',
        'aeMode': 'AE Mode',
        'aeType': 'AE Type',
        'off': 'Off',
        'continuous': 'Continuous',
        'oneShot': 'One-Shot',
        'none': 'None',
        'irisOnly': 'Iris Only',
        'shutterOnly': 'Shutter Only',
        'shutterAndIris': 'Shutter + Iris',
        'irisAndShutter': 'Iris + Shutter',
        'setAeMode': 'Set AE Mode',
        
        // 对比度
        'contrast': 'Contrast',
        'pivot': 'Pivot',
        'adjust': 'Adjust',
        'resetContrast': 'Reset Contrast',
        
        // 颜色
        'color': 'Color',
        'hue': 'Hue',
        'saturation': 'Saturation',
        'lumaContribution': 'Luma Contribution',
        'resetColor': 'Reset Color',
        
        // 页脚
        'documentation': 'YAML Documentation',
        'mediaManager': 'Web Media Manager',
        'github': 'GitHub'
    },
    'zh': {
        // 标题和页眉
        'pageTitle': 'Blackmagic Cameras 控制网页界面',
        'headerTitle': 'Blackmagic Cameras 控制网页界面',
        
        // 相机选择
        'cam': 'CAM',
        
        // 颜色校正
        'lift': '暗部',
        'gamma': '中间调',
        'gain': '高光',
        'offset': '偏移',
        'resetLift': '重置暗部',
        'resetGamma': '重置中间调',
        'resetGain': '重置高光',
        'resetOffset': '重置偏移',
        'setLift': '设置暗部',
        'setGamma': '设置中间调',
        'setGain': '设置高光',
        'setOffset': '设置偏移',
        
        // 曝光控制
        'filter': '滤镜',
        'exposureGain': '增益',
        'shutter': '快门',
        'balance': '白平衡',
        'autoWhitebalance': '执行自动白平衡',
        
        // 镜头控制
        'focus': '对焦',
        'iris': '光圈',
        'zoom': '变焦',
        'autoFocus': 'AF',
        
        // 传输控制
        'loop': '循环',
        'singleClip': '单段',
        'back': '后退',
        'forward': '前进',
        'record': '录制',
        'play': '播放',
        'stop': '停止',
        'timecode': '时间码',
        
        // 连接与设置
        'connection': '连接',
        'hostname': '主机名',
        'connect': '连接',
        'useHttps': '使用HTTPS',
        'sendApiCall': '发送API调用',
        'requestEndpoint': '请求端点',
        'requestBody': '请求正文',
        'sendApiRequest': '发送API请求',
        'apiManualInfo': '使用上述控件发送手动API请求。详情请参阅文档。',
        
        // 预设
        'presets': '预设',
        'presetSelect': '选择预设',
        'restoreFromPreset': '从预设恢复',
        
        // 曝光
        'exposure': '曝光',
        'iso': 'ISO',
        'aeMode': '自动曝光模式',
        'aeType': '自动曝光类型',
        'off': '关闭',
        'continuous': '连续',
        'oneShot': '单次',
        'none': '无',
        'irisOnly': '仅光圈',
        'shutterOnly': '仅快门',
        'shutterAndIris': '快门+光圈',
        'irisAndShutter': '光圈+快门',
        'setAeMode': '设置自动曝光模式',
        
        // 对比度
        'contrast': '对比度',
        'pivot': '轴心点',
        'adjust': '调整',
        'resetContrast': '重置对比度',
        
        // 颜色
        'color': '颜色',
        'hue': '色相',
        'saturation': '饱和度',
        'lumaContribution': '亮度贡献',
        'resetColor': '重置颜色',
        
        // 页脚
        'documentation': 'YAML文档',
        'mediaManager': '网页媒体管理器',
        'github': 'GitHub'
    }
};

// 初始化页面语言
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);
    highlightActiveLanguageButton();
});

// 语言切换功能
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('uiLanguage', lang);
        applyLanguage(lang);
        highlightActiveLanguageButton();
    }
}

// 突出显示当前选择的语言按钮
function highlightActiveLanguageButton() {
    const buttons = document.querySelectorAll('.languageButton');
    buttons.forEach(button => {
        const buttonLang = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (buttonLang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// 应用翻译到页面元素
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    // 更新页面标题
    document.title = translations[lang]['pageTitle'];
    document.querySelector('#headerContainer h1').textContent = translations[lang]['headerTitle'];
    
    // 更新其他元素
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // 根据元素类型设置文本
            if (element.tagName === 'INPUT' && element.getAttribute('type') === 'placeholder') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else if (element.hasAttribute('title')) {
                element.setAttribute('title', translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// 辅助函数：获取当前语言的翻译文本
function t(key) {
    return translations[currentLanguage][key] || key;
} 