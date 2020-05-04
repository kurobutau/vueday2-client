import VuexPersistence from 'vuex-persist'
import localforage from 'localforage'

export default function (context) {
    localforage.config({
        driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
        name        : 'vueWorkshop',
        version     : 1.0,
        // size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
        storeName   : 'installment', // Should be alphanumeric, with underscores.
        description : 'some description'
    });

    new VuexPersistence({
        key:'my-key-1',
        storage: window.localStorage,
        asyncStorage: false,
    }).plugin(context.store)
}