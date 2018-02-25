import sys
import cv2
import numpy

def main():
    input_data = sys.stdin.read()
    if input_data:
        image_array = numpy.frombuffer(input_data)
        image = cv2.imdecode(image_array, 1)
        # sys.stdout.write('Python received: ' + input_data)
        # print('You have found snakes')
        cv2.imshow("window", image)
        sys.stdout.write(image)
        sys.stdout.flush()

if __name__ == '__main__':
    main()