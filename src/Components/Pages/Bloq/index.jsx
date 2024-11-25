import React from 'react';
import images from '../../../Assets/Images/js/images';
import { Link, useNavigate } from 'react-router-dom';

function Bloq({ setSelectedBloq }) {
    const navigate = useNavigate();

    const bloqData = [
        { id: 1, title: "Tövsiyyə məktubu haqqında", description: "Tövsiyyə məktubu haqqında bilməli olduğunuz hərşey", img: images.bloqcard1, header:"Tövsiyyə məktubu iş və ya təhsil imkanlarına müraciət edən şəxs haqqında fikir yaratmaq üçün mühüm rol oynayır. Ənənəvi olaraq, işəgötürənlər və təhsil müəssisələri müraciətçinin bacarıqları və xarakteri haqqında daha dərin məlumat almaq üçün tövsiyyə məktublarına etibar edirlər. Bu yazıda tövsiyyə məktubunun əhəmiyyəti, strukturu və ideal bir məktubun necə yazılacağı haqqında ətraflı danışacağıq.",mainheader:"Tövsiyyə Məktubu Nədir və Niyə Vacibdir?",mainheadermain:"Tövsiyyə məktubu müraciətçinin keçmiş təcrübələrini və bacarıqlarını təsdiqləyən sənəddir. Müraciətçinin karyera və ya akademik yolunda bu məktubun böyük təsiri olur. Məsələn, bir hüquqşünas işə qəbul zamanı əvvəlki iş yoldaşlarından alınan müsbət tövsiyyə məktubunu təqdim edərək özünü təsdiqləyə bilər.",mainmainheader:"Yaxşı Tövsiyyə Məktubunun Strukturu",mainmain:"Güclü bir tövsiyyə məktubu giriş, əsas hissə və nəticədən ibarətdir:",mainmainmainheader:"Girişdə müraciətçini təqdim edərək necə tanıdığınızı və hansı sahədə birlikdə çalışdığınızı izah edin.",mainmainmain:"Əsas hissədə müraciətçinin əsas bacarıqları və uğurlarına dair nümunələr verin.",mainmainmainfooter:"Nəticədə müraciətçinin uyğun olduğunu təsdiq edin və onu səmimi şəkildə dəstəklədiyinizi qeyd edin.",footerheader:"Real Nümunə",footermain:"Güclü və yaxşı yazılmış tövsiyyə məktubu müraciətçinin uğur qazanmasına mühüm töhfə verir. Məktubun səmimiyyəti və dəstəyi mütləq şəkildə çatdırması zəruridir.",footerfooterheader:"Nəticə",footerfootermain:"Güclü və yaxşı yazılmış tövsiyyə məktubu müraciətçinin uğur qazanmasına mühüm töhfə verir. Məktubun səmimiyyəti və dəstəyi mütləq şəkildə çatdırması zəruridir."},
        { id: 2, title: "Hüquqşünasın səyahəti", description: "Hüquqşünasın səyahəti: Müasir Hüquq Peşəsində İnkişaf", img: images.bloqcard2, header:"Hüquq peşəsi, illərlə inkişaf edərək müasir dünyada yeni çağırışlar və imkanlarla zənginləşib. Bu yazıda müasir hüquq peşəsində bir hüquqşünasın inkişaf mərhələlərindən, qarşılaşdığı çətinliklərdən və yeni trendlərdən danışacağıq.",mainheader:"Hüquq Peşəsinin İnkişafı",mainheadermain:"Ənənəvi hüquq təcrübələri artıq rəqəmsallaşma və texnologiyaların inteqrasiyası ilə dəyişməkdədir. Hüquqşünaslar indi yalnız qanunları bilən deyil, həm də Aİ və rəqəmsal alətlərdən istifadə edən mütəxəssislərə çevrilirlər.",mainmainheader:"Müasir Hüquq Trendləri",mainmain:"Bir çox hüquq şirkəti artıq müqavilələrin avtomatlaşdırılması və məhkəmə təhlillərinin proqnozlaşdırılması üçün Aİ alətlərindən istifadə edir. Məsələn, bir hüquq firması, irimiqyaslı məhkəmə işlərinin təhlili üçün rəqəmsal analiz proqramlarından istifadə edir və bu, vaxt və vəsait baxımından böyük qənaət yaradır.",footerheader:"Real Nümunə",footermain:"Azərbaycan hüquq şirkətləri də artıq rəqəmsal müştəri əlaqələri və sənəd təhlili sistemlərindən istifadə edirlər. Bu sistemlər hüquqşünasların iş proseslərini sadələşdirir və effektivliklərini artırır.",footerfooterheader:"Nəticə",footerfootermain:"Hüquq peşəsi rəqəmsal çağda inkişaf edərək daha çevik və hərtərəfli xidmətlər təklif edir. Gələcəkdə bu inkişafın hüquqşünasların iş yükünü azaltmağa və daha dəqiq nəticələr təqdim etməyə davam edəcəyi gözlənilir."},
        { id: 3, title: "Hüquqda AI", description: "Hüquqda AI: AI hüquqşünası hüquqi xidmətlərə yanaşmanı necə dəyişdirir", img: images.bloqcard3, header:"Aİ hüquq xidmətlərini yeni səviyyəyə gətirərək hüquqşünasların işlərinə sürət, dəqiqlik və effektivlik əlavə edir. Bu yazıda Aİ-nin hüquq sahəsində necə istifadə olunduğuna və hüquqi xidmətlərdə hansı yeniliklərə səbəb olduğuna nəzər salacağıq.",mainheader:"Aİ Hüquqi Xidmətlərə Necə Təsir Edir?",mainheadermain:"Aİ, sənədlərin idarə edilməsi, müqavilə analizləri, proqnozlaşdırma və digər hüquqi xidmətlərdə insan gücünü əvəz edir. Bu, hüquqşünaslara daha strateji məsələlərə fokuslanmaq imkanı yaradır.",mainmainheader:"Real Nümunə",mainmain:"ABŞ-da istifadə olunan “ROSS Intelligence” adlı Aİ platforması hüquqi sualları cavablandırmaqla hüquqşünasların vaxtını əhəmiyyətli dərəcədə qənaət edir. Bu kimi platformalar mübahisə hallarında hüquqi məlumatları dəqiq şəkildə analiz edir.",footerfooterheader:"Nəticə",footerfootermain:"Aİ texnologiyası hüquqi xidmətlərdə inqilabi bir addım olub, hüquq peşəsini daha modern və müştəri yönümlü bir sahəyə çevirir."},
        { id: 4, title: "AI hüquqşünası ilə Məşğulluq", description: "AI hüquqşünası ilə Məşğulluq Mübahisələrinin Həlli İşlərinin həlli", img: images.bloqcard4, header:"Məşğulluq mübahisələri əmək sahəsində ən çox rast gəlinən hüquqi məsələlərdən biridir. Aİ bu mübahisələrin daha sürətli həll olunmasına kömək edir və hüquqşünasların qərar qəbuletmə prosesini təkmilləşdirir.",mainheader:"Aİ ilə Məşğulluq Mübahisələrinin Həlli Prosesləri",mainheadermain:"Aİ, işçi və işəgötürən arasında mübahisələrin əsasını analiz etməyə və uyğun hüquqi həllər təklif etməyə qadirdir. Bu prosesdə Aİ, sənəd analizlərini və iş icmalını avtomatik yerinə yetirir.",mainmainheader:"Real Nümunə",mainmain:"Böyük Britaniyada məşğulluq mübahisələrinin həlli üçün “CaseCrunch” adlı Aİ sistemi tətbiq olunur. Bu sistem vasitəsilə hüquqi mübahisələrin həlli prosesləri sürətlənmişdir.",footerfooterheader:"Nəticə",footerfootermain:"Aİ məşğulluq mübahisələrinin daha dəqiq və sürətli həllini təmin edir. Bu isə hüquqşünasların iş yükünü azaldaraq effektivliyi artırır."},
        { id: 5, title: "Ailə Hüququ Vəkili", description: "Ailə Hüququ Vəkili: Sənədlərin İdarə Edilməsi", img: images.bloqcard5, header:"Ailə hüququ sahəsində sənədlərin düzgün və təhlükəsiz idarə olunması çox vacibdir. Sənədlərin idarə edilməsi prosesində Aİ hüquqşünaslara dəstək olur, məlumatların qorunmasını və sürətli istifadəsini təmin edir.",mainheader:"Ailə Hüququnda Sənədlərin İdarə Edilməsinin Əhəmiyyəti",mainheadermain:"Aİ ilə sənədlər avtomatik analiz olunur və kateqoriyalaşdırılır, bu da hüquqşünasların işini xeyli sadələşdirir.",mainmainheader:"Real Nümunə",mainmain:"İrəli səviyyəli “Clio” proqramı ailə hüququ sənədlərinin idarə olunmasında Aİ köməyindən istifadə edir. Bu sistem, sənədlərin həm etibarlı saxlanmasını, həm də asan axtarışını təmin edir.",footerfooterheader:"Nəticə",footerfootermain:"Ailə hüququnda sənədlərin effektiv idarə olunması ailə hüququ sahəsində hüquqşünaslara və müştərilərə ciddi fayda verir."},
        { id: 6, title: "Mənə yaxın olan ən yaxşı", description: "Mənə yaxın olan ən yaxşı avtomobil qəzası hüquqşünasını necə tapmaq olar", img: images.bloqcard6, header:"Avtomobil qəzası hüquqşünası axtarışında olan şəxslər üçün ən yaxşı hüquqşünasın tapılması mürəkkəb ola bilər. Bu yazıda sizə ən yaxşı hüquqşünası seçmək üçün məsləhətlər verəcəyik.",mainheader:"Ən Yaxşı Hüquqşünası Necə Seçmək Olar?",mainheadermain:"Yaxşı avtomobil qəzası hüquqşünasını seçərkən onların təcrübəsini, müvəffəqiyyət göstəricilərini və müştəri rəylərini diqqətlə qiymətləndirin. Təcrübəli və etibarlı hüquqşünaslar adətən qəza hallarının hüquqi detallarını dərindən bilirlər.",mainmainheader:"Real Nümunə",mainmain:"Bir hüquq firmasının müştəri rəylərində “Sizə inandığım və hər zaman geri qayıtdığım bir hüquqşünasım var” deyən müştəri, hüquqşünasın etibar və peşəkarlığının önəmini vurğulayır.",footerfooterheader:"Nəticə",footerfootermain:"Ən yaxşı hüquqşünası tapmaq üçün tələblərinizi diqqətlə qiymətləndirin və peşəkarlığa önəm verin. Bu, qəza hallarınızda uğurlu hüquqi nəticələrə nail olmanıza kömək edəcəkdir."}
    ];

    const handleBloqClick = (bloq) => {
        setSelectedBloq(bloq);
        navigate("/bloq-details", { state: { bloq } });
    };

    return (
        <div className="Bloq">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="d-flex justify-content-center bloq-header">Bloq</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {bloqData.map((item, index) => (
                        <div className="col-xl-4" data-aos="zoom-in-up" key={index}>
                            <div className="bloq-box">
                                <img src={item.img} className="bloq-card-img" alt={item.title} />
                                <div className="bloq-box-content">
                                    <p>{item.title}</p>
                                </div>
                                <div className="bloq-box-info">
                                    <div className="bloq-box-info-time">
                                        <img src={images.clockicon} alt="clock" />
                                        <span>3 dəq</span>
                                    </div>
                                    <div
                                        className="bloq-box-info-details text-black"
                                        onClick={() => handleBloqClick(item)}
                                    >
                                        <span>Daha ətraflı</span>
                                        <img src={images.bloqcardicon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bloq;
