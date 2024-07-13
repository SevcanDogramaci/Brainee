import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncDataStore {
    static async getItem(key) {
        let jsonValue = null

        try {
            jsonValue = await AsyncStorage.getItem(key)
            if (jsonValue != null) return JSON.parse(jsonValue)
        } catch (err) {
            console.log("Error occurred while reading data:", err)
        }
        return jsonValue;
    }

    static async setItem(key, value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
            return true;
        } catch (e) {
            console.log("Error occurred while saving data:", err)
        }

        return false;
    }
}

export default AsyncDataStore;
