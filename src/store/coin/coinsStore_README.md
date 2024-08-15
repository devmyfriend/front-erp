
# coinsStore

The `coinsStore` is a Pinia store that manages the state, getters, and actions related to coins in the application. It interacts with the `coinsServices` to fetch, create, update, and delete coins.

## State

### 1. `coinsCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of coins.

## Getters

### 1. `getCoins`

Returns the list of coins from the state.

```javascript
getCoins(state) {
  return state.coinsCollection;
}
```

## Actions

### 1. `loadCoins`

Fetches the list of coins from the backend and updates the state.

```javascript
async loadCoins() {
  const data = await coinsServices.loadCoins();
  if (data) {
    this.coinsCollection = data;
  }
}
```

### 2. `findCoins`

Finds coins by name and updates the state with the search results.

```javascript
async findCoins(moneda) {
  const data = await coinsServices.findCoins(moneda);
  if (data) {
    if (data.length > 0) {
      this.coinsCollection = data;
      return true;
    } else {
      return false;
    }
  }
}
```

### 3. `createCoin`

Creates a new coin and reloads the list of coins.

```javascript
async createCoin(moneda) {
  const data = await coinsServices.createCoin(moneda);
  if (data) {
    this.loadCoins();
    return true;
  } else {
    return false;
  }
}
```

### 4. `updateCoin`

Updates an existing coin and reloads the list of coins.

```javascript
async updateCoin(moneda) {
  const data = await coinsServices.updateCoin(moneda);
  if (data) {
    this.loadCoins();
    return true;
  } else {
    return false;
  }
}
```

### 5. `deleteCoin`

Deletes a coin and reloads the list of coins.

```javascript
async deleteCoin(moneda) {
  const data = await coinsServices.deleteCoin(moneda);
  if (data) {
    this.loadCoins();
    return true;
  } else {
    return false;
  }
}
```

## Usage

```javascript
import { coinsStore } from '@/stores/coinsStore';

const store = coinsStore();
store.loadCoins();
```
