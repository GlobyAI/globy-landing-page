import Subscription from './Subscription'

export default function Plans() {
  return (
    <section className="globy__plans divider">
      <h3 className="heading">
        <em>Plans that suit everyone</em>
      </h3>
      <Subscription />
    </section>
  )
}
