<img src="coronavirus.jpg">

# COVID-19

> A basic NPM package to fetch data about the COVID-19 coronavirus outbreak.

## Installation

Installing `covid19` is easy. Just run the following command to add it to your NPM project...

```
npm i covid19
```

## Usage

There are no methods on the `covid19` package other than the default one. You can use the package to either get information about every country - including data about the world - or about a specific country.

The default method takes one parameter - `country`. If this parameter is not provided, the package returns an array full of data about every country, including the world (this is at index 0 of the array).

## Example

```js
const covid = require('covid19');

// get data about every country, including the world
const everyCountry = await covid();

// get data about a specific country - in this case the UK
const uk = await covid('uk');
```

## Schemas

When the country has been inputted, the package returns an object like this:

```js
{
  country: string,
  cases: number,
  todayCases: number,
  deaths: number,
  todayDeaths: number,
  recovered: number,
  critical: number
}
```

When the country has not been provided, it outputs an array of the schema. At index 0, there is a version of the schema that has the country set to `null` that represents an overview of the world as a whole.

## License

`covid19` is licensed using the [MIT](LICENSE) license.

**This means that you can...**

- Use the package for commercial purposes.
- Modify the package.
- Distribute the package.
- Sublicense the package.
- Use the package for private use.

**This also means you can not...**

- Hold the author liable. The work is provided "as is"

**In order to be able to do this you must...**

- Include the copyright notice in all copies or substantial uses of the work.
- Include the license notice in all copies or substantial uses of the work.
