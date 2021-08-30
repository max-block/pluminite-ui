pluminite2.maxblock.testnet - your NFT contract

// create market contract 
near create-account market.pluminite2.maxblock.testnet --masterAccount=pluminite2.maxblock.testnet --initial-balance 50

// deploy nft contract
near deploy --accountId=pluminite2.maxblock.testnet --wasmFile=contract/target/wasm32-unknown-unknown/release/nft_simple.wasm

// deploy nft market contract
near deploy --accountId=market.pluminite2.maxblock.testnet --wasmFile=contract/market-simple/target/wasm32-unknown-unknown/release/nft_simple.wasm

// init nft contract
near call pluminite2.maxblock.testnet new '{"owner_id":"pluminite2.maxblock.testnet","metadata":{"spec":"nft-2","name":"Pluminite2","symbol":"GEM2"},"supply_cap_by_type":{"test": "1000000"}, "unlocked": true, "use_storage_fees": false, "free_mints": 3}' --accountId=pluminite2.maxblock.testnet

// init market 
near call market.pluminite2.maxblock.testnet new '{"owner_id": "pluminite2.maxblock.testnet", "ft_token_ids": [], "use_storage_fees": false}' --accountId=pluminite2.maxblock.testnet