const compareKey = key =>
  (a, b) => {
    if (a[key].toLowerCase() < b[key].toLowerCase()) {
      return -1
    }
    if (a[key].toLowerCase() > b[key].toLowerCase()) {
      return 1
    }
    return 0
  }


export const AZ = arr => arr.sort(compareKey('brand'))
export const ZA = arr => arr.sort(compareKey('brand')).reverse()
export const lowestFirst = arr => arr.sort((a, b) => parseInt(a.price) - parseInt(b.price))
export const highestFirst = arr => arr.sort((a, b) => parseInt(b.price) - parseInt(a.price))