**Chips**

Dismissable group of tags with label.

**props**

`defaultChips` *array* -- The initial chips formated as such `[{label:"chip", value:"dip"}]`.

`column` *bool* (false) -- Wether chips are arranged in a column or a row.

`chipBackgroundColor` *string* -- Background color of the chip.

`chipFontColor` *string* -- The font color of the chip.

**events**

`onAdd` -- Triggered when chip is added.

`onRemove` -- Triggered when a chip is removed.

`onChange` -- Triggered when chip is added or removed.

***methods***

`addChip({label: "chip", value:"chip"})` -- Adds a chip.

`removeChip("value")` -- Remove chip based on value.

`getValue()` -- Returns all the chips.

`setValue([{label: "chip", value:"chip"}])` -- Sets the whole chip array. 


***example***

    <Chips column
        ref='entityChips'
        defaultChips={[{label: "chip", value: "chip"}]}
        onRemove={this.removeChip.bind(this)}
        chipBackgroundColor={theme.chipBackgroundColor}
        chipFontColor={theme.chipFontColor} />