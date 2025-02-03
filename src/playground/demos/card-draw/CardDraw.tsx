import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Button } from '../../../core/Button'

const cardFieldStyle = css`
  margin-inline: 0.5rem;
  padding: 0.25rem;
  width: 2rem;
`

const cardsStyle = css`
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--av-border-radius-md);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100px, 140px));
  margin-block: 1rem;
  min-height: 100px;
  padding: 1rem;
`

const cardStyle = css`
  background: white;
  border: 1px solid black;
  border-radius: var(--av-border-radius-md);
  box-shadow: var(--av-shadow-1);
  color: black;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-between;
  min-height: 160px;
  padding: 1rem;

  @keyframes card-fade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: card-fade 0.5s ease;
  }
`

const cardTopStyle = css`
  align-self: flex-start;
`

const cardFaceStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

const cardSuitMixin = css`
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
const cardSuitStyle = css`
  ${cardSuitMixin}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

/** Center cards with flex if only one row */
const cardSuitFlexStyle = css`
  ${cardSuitMixin}
  display: flex;
`

const cardBottomStyle = css`
  align-self: flex-end;
`

/**
 * Shuffles the deck of cards.
 * @param deck
 * @returns shuffled deck
 */

function shuffle(deck: Card[]) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

export function CardDraw() {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] as Value[]
  const suits = ['clubs', 'spades', 'diamonds', 'hearts'] as Suit[]
  const [cardsToDeal, setCardsToDeal] = useState<Card[]>([])
  const [numCards, setNumCards] = useState(5)

  /**
   * Takes numCards and deals a hand of cards.
   */
  function dealHand(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault() // prevent refresh
    shuffleAndDeal()
  }

  /**
   * Shuffles the deck and deals a hand of cards.
   */
  function shuffleAndDeal() {
    let shuffledCards: Card[] = []
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < 4; j++) {
        const card = {
          suit: suits[j],
          value: values[i],
        } as Card
        shuffledCards = [...shuffledCards, card]
      }
    }
    setCardsToDeal(shuffle(shuffledCards).slice(0, numCards))
  }

  /**
   * Onload deal a hand
   */
  useEffect(() => {
    shuffleAndDeal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <form onSubmit={dealHand}>
        <label htmlFor="numCards">Number of cards to deal:</label>
        <input
          css={cardFieldStyle}
          id="numCards"
          max="52"
          min="1"
          onChange={(e) => setNumCards(parseInt(e.target.value))}
          type="number"
          value={numCards}
        />
        <Button type="submit">Deal a new hand</Button>
      </form>
      <div css={cardsStyle}>
        {cardsToDeal.map((card, index) => {
          const cardValue = parseInt(card.value)
          let maxSuits
          if (card.value === 'A') {
            maxSuits = 1
          } else {
            maxSuits = Number.isInteger(cardValue) ? cardValue : 10
          }
          return (
            <div
              key={card.value + card.suit}
              css={cardStyle}
              data-testid={`card-${index}`}
              style={{
                animationDuration: `${index * 0.2}s`,
                color: card.suit === 'hearts' || card.suit === 'diamonds' ? '#d20000' : '#000000',
              }}
            >
              <div css={cardTopStyle}>{card.value}</div>
              <div css={cardFaceStyle} data-testid={`card-${card.suit}`}>
                <div css={maxSuits < 4 ? cardSuitFlexStyle : cardSuitStyle}>
                  {Array.from({
                    length: maxSuits,
                  }).map((_, index) => (
                    <span key={`card-suit-${index}`}>
                      {card.suit === 'hearts'
                        ? '♥'
                        : card.suit === 'diamonds'
                          ? '♦'
                          : card.suit === 'clubs'
                            ? '♣'
                            : '♠'}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-bottom" css={cardBottomStyle}>
                {card.value}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

type Value = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'A' | 'J' | 'K' | 'Q'
type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades'

interface Card {
  suit: Suit
  value: Value
}
