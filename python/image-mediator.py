import sys
import cv2
import numpy as np
import base64
from PIL import Image
from io import BytesIO
import time


def main():
    print('Receiving')
    start = time.time()
    input_data = sys.stdin.buffer.read()
    # input_data = sys.stdin.read()
    bio = BytesIO()
    bio.write(base64.b64decode(input_data))
    pil_image = Image.open(bio)
    image_array = np.array(pil_image)
    sys.stdin.close()
    print('Received')
    print('Time: ' + str(round((time.time() - start) * 1000)) + ' ms')
    if input_data:
        image = cv2.cvtColor(image_array, cv2.COLOR_RGB2BGR)
        # image = image_array
        sys.stdout.write(str(image.shape))
        # sys.stdout.write(str(image_array.shape))
        # sys.stdout.write(np.array_str(image_array))
        # buffer = cv2.imencode('.png', image)
        # b64image = base64.b64encode(buffer)
        sys.stdout.flush()
        cv2.imshow("window", image)
        cv2.waitKey(2000)


if __name__ == '__main__':
    main()
