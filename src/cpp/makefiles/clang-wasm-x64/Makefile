ENV=clang-wasm-x64
SRC=/home/denis/reps/denis-belov/webapp/src/cpp/src
BUILD=/home/denis/reps/denis-belov/webapp/src/cpp/build/$(ENV)
LIBS=/home/denis/libs
REPS=/home/denis/reps
ASM_EXT=dcmp
LIB_EXT=o

$(BUILD)/output/wasm/main.wasm : $(BUILD)/internal/o/main.cpp.o $(BUILD)/internal/o/func.cpp.o $(REPS)/denis-belov/xgk-math/build/$(ENV)/output/$(LIB_EXT)/xgk-math.$(LIB_EXT)
	mkdir -p $(BUILD)/output/wasm && mkdir -p $(BUILD)/output/dcmp && wasm-ld-12 $(BUILD)/internal/o/main.cpp.o $(BUILD)/internal/o/func.cpp.o $(REPS)/denis-belov/xgk-math/build/$(ENV)/output/$(LIB_EXT)/xgk-math.$(LIB_EXT) -mwasm32 --export-all --no-entry --allow-undefined -o $(BUILD)/output/wasm/main.wasm

$(BUILD)/internal/o/main.cpp.o : $(SRC)/main.cpp 
	mkdir -p $(BUILD)/internal/o && mkdir -p $(BUILD)/internal/dcmp && clang++-12 $(SRC)/main.cpp -c -std=c++20 --target=wasm32-unknown-unknown -O3 -msimd128 -Wall -Wextra -Wpedantic -v -I /usr/include/c++/10 -I /usr/include -I /usr/include/x86_64-linux-gnu -I /usr/include/x86_64-linux-gnu/c++/10 -I $(SRC) -I $(REPS) -o $(BUILD)/internal/o/main.cpp.o

$(BUILD)/internal/o/func.cpp.o : $(SRC)/func.cpp 
	mkdir -p $(BUILD)/internal/o && mkdir -p $(BUILD)/internal/dcmp && clang++-12 $(SRC)/func.cpp -c -std=c++20 --target=wasm32-unknown-unknown -O3 -msimd128 -Wall -Wextra -Wpedantic -v -I /usr/include/c++/10 -I /usr/include -I /usr/include/x86_64-linux-gnu -I /usr/include/x86_64-linux-gnu/c++/10 -I $(SRC) -I $(REPS) -o $(BUILD)/internal/o/func.cpp.o

$(REPS)/denis-belov/xgk-math/build/$(ENV)/output/$(LIB_EXT)/xgk-math.$(LIB_EXT) : $(REPS)/denis-belov/xgk-math/src/_intrin.h $(REPS)/denis-belov/xgk-math/src/const.cpp $(REPS)/denis-belov/xgk-math/src/mat4/_/mat4-128_.cpp $(REPS)/denis-belov/xgk-math/src/mat4/_/mat4-32_.cpp $(REPS)/denis-belov/xgk-math/src/mat4/_/mat4_.cpp $(REPS)/denis-belov/xgk-math/src/mat4/mat4-128.cpp $(REPS)/denis-belov/xgk-math/src/mat4/mat4-32.cpp $(REPS)/denis-belov/xgk-math/src/mat4/mat4.cpp $(REPS)/denis-belov/xgk-math/src/mat4/mat4.h $(REPS)/denis-belov/xgk-math/src/object/object.cpp $(REPS)/denis-belov/xgk-math/src/object/object.h $(REPS)/denis-belov/xgk-math/src/orbit/orbit.cpp $(REPS)/denis-belov/xgk-math/src/orbit/orbit.h $(REPS)/denis-belov/xgk-math/src/quat/_/quat-128.cpp $(REPS)/denis-belov/xgk-math/src/quat/_/quat-32.cpp $(REPS)/denis-belov/xgk-math/src/quat/_/quat.cpp $(REPS)/denis-belov/xgk-math/src/quat/quat-128.cpp $(REPS)/denis-belov/xgk-math/src/quat/quat-32.cpp $(REPS)/denis-belov/xgk-math/src/quat/quat.cpp $(REPS)/denis-belov/xgk-math/src/quat/quat.h $(REPS)/denis-belov/xgk-math/src/util/util-asm-x64.asm $(REPS)/denis-belov/xgk-math/src/util/util-asm-x64.s $(REPS)/denis-belov/xgk-math/src/util/util.cpp $(REPS)/denis-belov/xgk-math/src/util/util.h $(REPS)/denis-belov/xgk-math/src/vec4/_/vec4-128.cpp $(REPS)/denis-belov/xgk-math/src/vec4/_/vec4-32.cpp $(REPS)/denis-belov/xgk-math/src/vec4/_/vec4.cpp $(REPS)/denis-belov/xgk-math/src/vec4/vec4.cpp $(REPS)/denis-belov/xgk-math/src/vec4/vec4.h
	genmake $(ENV) $(REPS)/denis-belov/xgk-math/genmake.json
