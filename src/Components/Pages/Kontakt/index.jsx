import React from 'react'
import images from '../../../Assets/Images/js/images'

function Kontakt() {
  return (
    <div className='Kontakt'>
        <div className="container">
            <div class="row justify-content-center align-items-center">
                <div className="col-xl-4">
                    <h2 className='kontakt-header'>Bizimlə Əlaqə</h2>
                </div>
                <div className="col-xl-6">
                    <img src={images.kontaktimg} alt="" className='kontakt-img'/>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-5">
                <h2 className='kontakt-main'>Mesaj Göndər</h2>
                </div>
            </div>
            <form>
            <div className="row gap-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-3">
                                <input type="text" placeholder="Ad, soyad" className='input'/>
                        </div>
                        <div className="col-xl-3">
                                <input type="text" placeholder="Subject" className='input'/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3">          
                                <input type="text" placeholder="G-mail" className='input'/>
                        </div>
                        <div className="col-xl-3">
                                <input type="text" placeholder="Number" className='input'/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <input type="text" className='message-input' placeholder='Mesaj yaz'/>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-xl-5">
                            <button className='message-send-btn'>Göndər</button>
                        </div>
                    </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Kontakt