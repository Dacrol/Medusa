from filterdataset.main import Filterer

# filterer = Filterer()
filterer = Filterer(attributes_file='python/training/dataset/attributes.txt')
filenames = filterer.get_filenames(attributes=('Arched_Eyebrows', '5_o_Clock_Shadow', 'Black_Hair'), notattributes='Male')

print(filenames[0:10])
print(filenames[0:-10])
print(filenames['label'])
print(filenames['filename'])
print(filenames.shape)
