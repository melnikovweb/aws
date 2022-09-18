import { useState, useEffect } from 'react'
import SearchBtn from 'components/Icons/Search'

const SearchForm = ({ onClickSearch, searchValue }) => {
  const [text, setText] = useState(searchValue)

  useEffect(() => {
    setText(searchValue)
  }, [searchValue])

  const changeText = e => {
    setText(e.target.value)
  }

  return (
    <form method="POST" className="form glossary-form">
      <input
        className="glossary-form__word"
        type="text"
        name="word"
        value={text}
        onChange={changeText}
        autoComplete="off"
      />
      <button
        onClick={e => onClickSearch(e, text)}
        className="glossary-form__button"
      >
        <SearchBtn className="glossary-form__button-icon" />
      </button>
    </form>
  )
}

export default SearchForm
