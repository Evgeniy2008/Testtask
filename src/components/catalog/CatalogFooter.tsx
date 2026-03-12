import firstFooterIcon from '../../assets/first_footerIcon.png'
import madeInUkraine from '../../assets/madeinUkraine.png'
import mastercard from '../../assets/masyercard.png'
import visa from '../../assets/visa.png'
import applePay from '../../assets/applepay.png'
import googlePay from '../../assets/googlepay.png'

export function CatalogFooter() {
  return (
    <footer className="catalog-footer">
      <div className="footer-left">
        <img src={firstFooterIcon} alt="AQVEX footer logo" className="footer-brand" />
        <div className="ukraine-badge-wrap">
          <img src={madeInUkraine} alt="Made in Ukraine" className="ukraine-badge" />
        </div>
        <span>AQVEX © 2026 | Все права защищены</span>
      </div>
      <div className="footer-right">
        <img src={mastercard} alt="Mastercard" />
        <img src={visa} alt="Visa" />
        <img src={applePay} alt="Apple Pay" />
        <img src={googlePay} alt="Google Pay" />
      </div>
    </footer>
  )
}
