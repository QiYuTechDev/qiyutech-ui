

clean:
	rm -rf .parcel-cache dist

build: clean
	yarn parcel build src/index.ts

publish: build
	npm publish
