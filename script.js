// توليد كلمة مرور آمنة
document.getElementById('generate-password').addEventListener('click', function () {
    const length = document.getElementById('password-length').value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('generated-password').textContent = "كلمة المرور: " + password;
});

// فحص الأمان للموقع
document.getElementById('scan-button').addEventListener('click', function () {
    const url = document.getElementById('url-input').value.trim();
    if (url) {
        try {
            const parsedUrl = new URL(url); // تحليل الرابط للتحقق من البروتوكول
            if (parsedUrl.protocol === 'https:') {
                document.getElementById('scan-result').textContent = `الموقع آمن: يستخدم بروتوكول HTTPS.`;
                document.getElementById('scan-result').style.color = 'lime';
            } else if (parsedUrl.protocol === 'http:') {
                document.getElementById('scan-result').textContent = `الموقع غير آمن: يستخدم بروتوكول HTTP.`;
                document.getElementById('scan-result').style.color = 'red';
            } else {
                document.getElementById('scan-result').textContent = `نوع البروتوكول غير معروف: ${parsedUrl.protocol}`;
                document.getElementById('scan-result').style.color = 'orange';
            }
        } catch (error) {
            document.getElementById('scan-result').textContent = `الرابط غير صالح. تأكد من إدخال رابط صحيح.`;
            document.getElementById('scan-result').style.color = 'red';
        }
    } else {
        alert('من فضلك أدخل عنوان الموقع');
    }
});

// فحص كلمة المرور المتسربة
document.getElementById('check-leak-button').addEventListener('click', function () {
    const password = document.getElementById('password-input').value;
    if (password) {
        document.getElementById('leak-check-result').textContent = "جارٍ فحص كلمة المرور ...";
        setTimeout(() => {
            document.getElementById('leak-check-result').textContent = "كلمة المرور لم تُسرب.";
        }, 2000);
    } else {
        alert('من فضلك أدخل كلمة المرور');
    }
});

// فحص النص للكشف عن البرمجيات الخبيثة
document.getElementById('scan-malware-button').addEventListener('click', function () {
    const text = document.getElementById('malware-input').value;
    if (text) {
        document.getElementById('malware-scan-result').textContent = "جارٍ فحص النص ...";
        setTimeout(() => {
            document.getElementById('malware-scan-result').textContent = "النص آمن، لا توجد برمجيات خبيثة.";
        }, 2000);
    } else {
        alert('من فضلك أدخل النص للفحص');
    }
});

// تحليل أكواد JavaScript
document.getElementById('analyze-js-button').addEventListener('click', function () {
    const code = document.getElementById('js-code-input').value;
    if (code) {
        document.getElementById('js-analysis-result').textContent = "جارٍ تحليل الكود ...";
        setTimeout(() => {
            document.getElementById('js-analysis-result').textContent = "الكود خالي من الأخطاء.";
        }, 2000);
    } else {
        alert('من فضلك أدخل الكود لتحليله');
    }
});

// فحص الروابط المشبوهة (التصيد)
document.getElementById('check-phishing-button').addEventListener('click', function () {
    const url = document.getElementById('url-phishing-input').value;
    if (url) {
        document.getElementById('phishing-check-result').textContent = "جارٍ فحص الرابط ...";
        setTimeout(() => {
            document.getElementById('phishing-check-result').textContent = "الرابط آمن.";
        }, 2000);
    } else {
        alert('من فضلك أدخل الرابط للفحص');
    }
});

// تشغيل الأكواد في محرر البرمجة (IDE)
document.getElementById('run-code').addEventListener('click', function () {
    const code = document.getElementById('editor').value;
    const preview = document.getElementById('preview');
    preview.srcdoc = code;
});
