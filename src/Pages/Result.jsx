import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../Style/ResultStyle.css';
import logy from'../assets/logo-withoutbg.png'
export default function Result(){
    const navigate = useNavigate();
    const [result , setResult] = useState(null)
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isSending, setIsSending] = useState(true); // starts to send
    const [emailSent, setEmailSent] = useState(false);

    // to bring the data from the local storage
    useEffect(()=>{
        const savedResult = localStorage.getItem('quizResult');
        const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');

        console.log("savedResult:", savedResult);
        console.log("name:", name);
        console.log("email:", email);

        if (savedResult) {
            const parsed = JSON.parse(savedResult);
            console.log("Parsed result:", parsed);
            setResult(parsed);
        }
        if (name) setUserName(name);
        if (email) setUserEmail(email);
    },[])

    /********************for sending the email***************** */
    useEffect(() => {
        console.log("Checking email send conditions:", { result: !!result, userEmail, emailSent });
        if (result && userEmail && !emailSent) {
            sendResultToEmail();
        }
    }, [result, userEmail]);

    /******************************Infos to be sent**************** */
    const fieldsInfo = {
        frontend: {
            name: "Frontend Developer ",
            description: "هتحب الشغلانة دي لو بتحب إن الناس تشوف شغلك وتنبهر بيه! هتشتغل على تصميم المواقع والتطبيقات، وتخليها سهلة وجميلة للمستخدم. هتكون مسؤول عن كل حاجة العين بتشوفها على الشاشة.",
            skills: ["React", "Vue.js", "Angular", "HTML/CSS", "JavaScript"],
            icon: "🎨",
            advice: "لو بتحب الرسم والتفاصيل الصغيرة وبتفرق معاك شكل الحاجة قبل ما تشتغل، ده المجال المناسب ليك!"
        },
        backend: {
            name: "Backend Developer ",
            description: "أنت بتحب الحاجات اللي محدش بيشوفها بس كل حاجة بتعتمد عليها! هتشتغل على السيرفرات وقواعد البيانات، وتتأكد إن كل حاية شغالة من جوه زي الفل. إنت زي المهندس اللي بيبني أساسات العمارة.",
            skills: ["Node.js", "Python", "Java", "SQL", "APIs"],
            icon: "⚙️",
            advice: "لو بتحب المنطق والترتيب وبتفكر كتير في إزاي الحاجات بتشتغل من جوه، إنت مكانك هنا!"
        },
        fullstack: {
            name: "Full Stack Developer ",
            description: "إنت شخص مش بيحب يختار بين حاجتين، عايز تلم الكل! هتشتغل على كل حاجة من الأول للآخر، من شكل الواجهة لحد منطق الخلفية. إنت زي الطاهي اللي بيعمل الأكلة من البداية للنهاية.",
            skills: ["MERN", "MEAN", "Django", "Ruby on Rails", "Databases"],
            icon: "🚀",
            advice: "لو بتحب التنوع وبتزهق بسرعة من حاجة واحدة، ومش عايز تختار بين المجالين، ده طريقك الصح!"
        },
        testing: {
            name: "QA/Testing Engineer ",
            description: "إنت الشخص اللي بيحب يكسر الحاجة عشان يطلعها أحسن! هتشتغل إنك تجرب البرامج وتدور على الأخطاء قبل ما توصل للمستخدم. إنت زي المراقب اللي مفيش حاجة بتفوته.",
            skills: ["Selenium", "Jest", "Cypress", "Manual Testing", "Automation"],
            icon: "🔍",
            advice: "لو بتحب تدقق في كل صغيرة وكبيرة، وبتستمتع لما تلاقي خطأ وتصلحه، المجال ده معمول ليك بالظبط!"
        },
        cybersecurity: {
            name: "Cyber Security Specialist",
            description: "أنت اللي بتحمي الناس من الهجمات والاختراقات! هتشتغل إنك تأمن الأنظمة وتحمي بيانات المستخدمين. إنت زي حارس الأمن اللي مفيش حد بيدخل غير لما يتأكد إنه تمام.",
            skills: ["Network Security", "Penetration Testing", "Encryption", "Kali Linux"],
            icon: "🔒",
            advice: "لو بتحب الألغاز والتحديات، وبتفكر زي المخترق عشان توقفه، يبقى إنت هتبقى متميز في المجال ده!"
        },
        dataanalysis: {
            name: "Data Analyst ",
            description: "إنت الشخص اللي بيفهم لغة الأرقام! هتشتغل إنك تجمع البيانات وتحللها وتطلع منها معلومات مهمة بتساعد في اتخاذ القرارات. إنت زي المحقق اللي بيكتشف الحقايق من الأرقام.",
            skills: ["Python", "SQL", "Tableau", "Pandas", "Statistics"],
            icon: "📊",
            advice: "لو بتحب الإحصاءات والجداول وبتستمتع إنك تلاقي أنماط وإجابات من البيانات، المجال ده هيبقى شغفك!"
        },
        ai: {
            name: "AI/ML Engineer ",
            description: "إنت بتحب المستقبل وعايز تكون جزء منه! هتشتغل إنك تعلم الآلات تتعلم وتفكر وتاخد قرارات زي الإنسان. إنت زي الأب اللي بيدلع عياله يعلمهم الحاجات الجديدة.",
            skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning"],
            icon: "🤖",
            advice: "لو بتحب التكنولوجيا المتقدمة وبتتفرج على أفلام الخيال العلمي وتحلم إنك تعمل الحاجات دي، إنت في المكان الصح!"
        }
    };

    const fieldInfo = result ? fieldsInfo[result.field] : null;

    /**************************Function that will handle the emails*****************/
    const sendResultToEmail = () => {
        // التأكد من وجود fieldInfo قبل الإرسال
        if (!fieldInfo) {
            console.error("fieldInfo is null, cannot send email");
            setIsSending(false);
            return;
        }

        setIsSending(true);

        const templateParams = {
            user_name: userName,
            result_icon: fieldInfo.icon,
            result_field: fieldInfo.name,
            result_description: fieldInfo.description,
            result_skills: fieldInfo.skills.join(' • '),
            result_advice: fieldInfo.advice,
            quiz_date: new Date().toLocaleDateString('ar-EG')
        };

        console.log("Sending email with params:", templateParams);

        emailjs.send(
            'service_elx8hrp',     // Service ID بتاعك
            'template_1zr7oxn',    // Template ID اللي خدتيه
            templateParams,
            'MEqnt6gmKSl4wfFEm'     
        )
        .then(() => {
            setIsSending(false);
            setEmailSent(true);
            console.log('Email sent successfully!');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            setIsSending(false);
        });
    };

    const restartQuiz = () => {
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('quizResult');
        navigate('/');
    };

    // Show loading if result or fieldInfo is not ready
    if (!result || !fieldInfo) {
        return (
            <div className="loading">
                <div className="loading-spinner">⏳</div>
                <p>جاري تحميل النتيجة...</p>
            </div>
        );
    }

    return (
        <>
        <div className='logo'><img src={logy} alt="logo" /></div>
        <div className="result-container">
            <div className="result-card">
                <div className="result-header">
                    <span className="result-icon">{fieldInfo.icon}</span>
                    <h1>نتيجة الاختبار 🎯</h1>
                </div>

                <div className="user-info">
                    <p>مرحباً <strong>{userName}</strong>،</p>
                </div>

                <div className="field-result">
                    <h2>المجال المناسب لك هو:</h2>
                    <div className="field-name">{fieldInfo.name}</div>
                    <p className="field-description">{fieldInfo.description}</p>
                </div>

                {/* النصيحة */}
                <div className="advice-section">
                    <p className="advice-text">💡 {fieldInfo.advice}</p>
                </div>

                
                <div className="actions">
                    {emailSent ? (
                        <div className="success-message">
                            ✅ تم إرسال النتيجة إلى بريدك الإلكتروني!
                        </div>
                    ) : isSending ? (
                        <div className="sending-message">
                            ⏳ جاري إرسال النتيجة إلى بريدك الإلكتروني...
                        </div>
                    ) : (
                        <div className="error-message">
                            ⚠️ حدث مشكلة في الإرسال. يمكنك المحاولة يدوياً:
                        </div>
                    )}
                    
                    {!emailSent && !isSending && (
                        <button className="send-email-btn" onClick={sendResultToEmail}>
                            📧 أرسل النتيجة على الإيميل
                        </button>
                    )}
                    
                    <button className="restart-btn" onClick={restartQuiz}>
                        🔄 ابدأ اختبار جديد
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}