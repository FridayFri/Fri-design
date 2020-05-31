import React, {
  FC,
  useState,
  ChangeEvent,
  ReactElement,
  useEffect,
  KeyboardEvent,
  useRef
} from "react";
import classNames from "classnames";
import { InputProps, Input } from "../Input/input";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from '../../hooks/useClickOutside'
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}
interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...resProps
  } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSugestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [heightlightIndex, setHeightlightIndex] = useState(-1);
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLAppletElement>(null)
  const debouncedValue = useDebounce(inputValue, 500);
  useClickOutside(componentRef, ()=> { setSugestions([]) })
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setSugestions(data);
          setLoading(false);
        });
      } else {
        setSugestions(results);
      }
    } else {
      setSugestions([]);
    }
    setHeightlightIndex(-1)
  }, [debouncedValue]);
  const hightlight = (index: number) => { 
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHeightlightIndex(index);
    console.log("heightlightIndex", heightlightIndex);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLAppletElement>) => {
    console.log(111, e.keyCode);
    switch (e.keyCode) {
      case 13:
        if (suggestions[heightlightIndex]) {
          handleSelect(suggestions[heightlightIndex]);
        }

        break;
      case 38:
        hightlight(heightlightIndex - 1);
        break;
      case 40:
        hightlight(heightlightIndex + 1);
        break;
      case 27:
        setSugestions([]);
        break;
      default:
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSugestions([]);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item;
  };
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const cnames = classNames("suggestion-item", {
            "is-active": index === heightlightIndex,
          });
          return (
            <li
              key={index}
              className={cnames}
              onClick={() => {
                handleSelect(item);
              }}
            >
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        {...resProps}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {loading && (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {suggestions.length && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
