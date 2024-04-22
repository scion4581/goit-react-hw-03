import css from './SearchBox.module.css';

export default function SearchBox({value, onChangeSearchInput}) {
    return (
        <div className={css.searchBox} >
            <p>Find contacts by name</p>
            <input type='text' value={value} onChange={(e) => onChangeSearchInput(e.target.value)} />
        </div>
    );
}