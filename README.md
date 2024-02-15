#### A playground to easily see how bullq handles messages

##### To install
-  A redis instance running locally - `brew install redis` 
- `npm i`

##### To Run
`npm run start` 

#### Ideas you can try:
- Decrease the queue timeout and see how it handles timeouts in the job processor
- turn off or restart your redis instance while it is processing 
- Your own custom backoff handler


