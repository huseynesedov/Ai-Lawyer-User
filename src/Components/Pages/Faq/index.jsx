import React from 'react'

function Faq() {
  return (
    <div className='Faq gradientFaq'>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="Faq-header d-flex justify-content-center">
              <h1>Ən çox verilən suallar</h1>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-xl-6">
            <div className="details-box">
              <details>
                <summary>
                  “AI lawyer” nədir?
                </summary>
                <p>“AI lawyer” hüquqi suallarınıza cavab verən onlayn platformadır. Burada Azərbaycan qanunvericiliyi ilə bağlı suallar verə, FAQ bölməsində ümumi məlumatlara baxa və vəkillə məsləhətləşmə randevusu ala bilərsiniz.</p>
              </details>
              <details>
                <summary>
                  Necə qeydiyyatdan keçə bilərəm?
                </summary>
                <p>Saytda qeydiyyatdan keçmək üçün “Qeydiyyat” düyməsini klikləyin və tələb olunan məlumatları daxil edin. E-poçtunuza gələn təsdiq linkini aktivləşdirərək hesabınızı təsdiqləyin.</p>
              </details>
              <details>
                <summary>
                  Necə sual verə bilərəm və gündə neçə sual verə bilərəm?
                </summary>
                <p>Qeydiyyatdan keçdikdən sonra “Çata başla” bölməsindən sualınızı verə bilərsiniz. Hər gün 10 sual vermək mümkündür və sual limiti 24 saatdan sonra yenilənir.</p>
              </details>
              <details>
                <summary>
                  Bir sual üçün neçə cavab ala bilərəm?
                </summary>
                <p>Hər sual üçün bir cavab verilir. Əgər əlavə məlumat lazımdırsa, yeni sual verə bilərsiniz.
                </p>
              </details>
              <details>
                <summary>
                  Vəkillə məsləhətləşmə necə olur?

                </summary>
                <p>Vəkillə məsləhətləşmək üçün “Məsləhət alın” bölməsindən formu doldurun və uyğun vaxt seçərək randevu alın. Vəkil sizinlə əlaqə saxlayacaq.
                </p>
              </details>
              <details>
                <summary>
                  Platformanın istifadəsi ödənişlidirmi?

                </summary>
                <p>Gün ərzində 10 sual vermək ödənişsizdir. Lakin fərdi vəkillə məsləhət xidmətləri ödənişli ola bilər.
                </p>
              </details>
              <details>
                <summary>
                  Şəxsi məlumatlarım necə qorunur?
                </summary>
                <p>Platformamızda şəxsi məlumatlarınız tam məxfi saxlanılır və üçüncü tərəflərə ötürülmür. Məlumatlar şifrələnmiş şəkildə qorunur.
                </p>
              </details>
              <details>
                <summary>
                  AI cavabları hüquqi məsləhət kimi istifadə edilə bilərmi?
                </summary>
                <p>Süni intellektin cavabları ümumi məlumat xarakteri daşıyır və rəsmi hüquqi məsləhət yerinə keçmir. Konkret məsələlər üçün vəkillə məsləhət almaq tövsiyə olunur.
                </p>
              </details>
              <details>
                <summary>
                  Sayt hansı dillərdə mövcuddur?

                </summary>
                <p>Hazırda platformamız Azərbaycan dilində fəaliyyət göstərir, lakin gələcəkdə digər dillərin də əlavə edilməsi planlaşdırılır.
                </p>
              </details>
              <details>
                <summary>
                  Şifrəmi unutmuşam, nə etməliyəm?
                </summary>
                <p>Giriş səhifəsində “Şifrəni unutdum” düyməsini klikləyin və e-poçtunuza göndərilən link vasitəsilə yeni şifrə təyin edin.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq