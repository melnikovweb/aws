import classnames from 'classnames'

const Alphabet = ({ list, onClickLetter, listActive }) => {
  return (
    <div className="glossary-alphabet">
      {list.map(({ letter }, index) => (
        <span
          onClick={onClickLetter}
          className={classnames('glossary-alphabet__letter', {
            active: listActive.includes(letter),
          })}
          key={`letter-${index}`}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}

export default Alphabet
