SRC=/home/denis/reps/denis-belov/webapp/src/cpp/src
BUILD=/home/denis/reps/denis-belov/webapp/src/cpp/build/emcc-x64
LIBS=/home/denis/libs
REPS=/home/denis/reps

$(BUILD)/output/js/main.js : $(BUILD)/internal/o/main.o $(BUILD)/internal/o/func.o $(REPS)/denis-belov/xgk-math/build/emcc-x64/output/a/xgk-math.a
	mkdir -p $(BUILD)/output/js && mkdir -p $(BUILD)/output/null && emcc $(BUILD)/internal/o/main.o $(BUILD)/internal/o/func.o $(REPS)/denis-belov/xgk-math/build/emcc-x64/output/a/xgk-math.a --bind -s WASM=1 -s SINGLE_FILE=1 -s MODULARIZE=1 -s EXPORT_ES6=1 -s USE_ES6_IMPORT_META=0 -s ENVIRONMENT=web -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s ASSERTIONS=1 -o $(BUILD)/output/js/main.js

$(BUILD)/internal/o/main.o : $(SRC)/main.cpp 
	mkdir -p $(BUILD)/internal/o && mkdir -p $(BUILD)/internal/null && emcc $(SRC)/main.cpp -c -std=c++20 -O3 -msimd128 -msse -Wall -Wextra -Wpedantic -I $(SRC) -o $(BUILD)/internal/o/main.o

$(BUILD)/internal/o/func.o : $(SRC)/func.cpp 
	mkdir -p $(BUILD)/internal/o && mkdir -p $(BUILD)/internal/null && emcc $(SRC)/func.cpp -c -std=c++20 -O3 -msimd128 -msse -Wall -Wextra -Wpedantic -I $(SRC) -o $(BUILD)/internal/o/func.o

$(REPS)/denis-belov/xgk-math/build/emcc-x64/output/a/xgk-math.a : $(REPS)/denis-belov/xgk-math/src/data/const.cpp $(REPS)/denis-belov/xgk-math/src/data/mat4/mat4.cpp $(REPS)/denis-belov/xgk-math/src/data/mat4/mat4-32.cpp $(REPS)/denis-belov/xgk-math/src/data/mat4/mat4-128.cpp
	make -f /home/denis/reps/denis-belov/xgk-math/makefiles/emcc-x64/makefile
