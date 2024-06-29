import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncDataStore {
    static async getItem(key) {
        let jsonValue = null
        console.log("Getting value for key:", key)

        try {
            jsonValue = await AsyncStorage.getItem(key)
            console.log("GET THE VALUE", jsonValue)
            if (jsonValue != null) return JSON.parse(jsonValue)
        } catch (err) {
            console.log("Error occurred while reading data:", err)
        }
        return jsonValue;
    }

    static async setItem(key, value) {
        console.log("Setting value for key:", key, " value:", value)
        
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
            console.log("SET THE VALUE")
            return true;
        } catch (e) {
            console.log("Error occurred while saving data:", err)
        }

        return false;
    }
}

export default AsyncDataStore;
