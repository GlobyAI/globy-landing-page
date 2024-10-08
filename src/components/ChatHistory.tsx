import Message from './Message'

export default function ChatHistory() {
  return (
    <ul className="chat-history">
      <li className="chat-history__quote-message">
        <Message>
          Congratulations with starting your own business! 🎉{' '}
          <span className="bold"> What business should you start?</span>
        </Message>
        <Message
          isCustomer
          message="I want to create a hair salon that focuses on various beauty products."
        />
      </li>
      <li className="chat-history__quote-message">
        <Message>
          Hair salon is a great business! We’ve analysed thousands of webpages
          in this domain and ready to provide you with best practice. Let’s
          start with some basics.
          <span className="bold"> Do you have a website already?</span>
        </Message>
        <Message isCustomer>
          <p>Type here...</p>
          <div className="alternatives">
            <span>Yes, I do actually</span>
            <span>No, I don’t, this is why I’m here</span>
          </div>
        </Message>
      </li>
      <li className="chat-history__quote-message">
        <Message />
        <Message isCustomer />
      </li>
    </ul>
  )
}
