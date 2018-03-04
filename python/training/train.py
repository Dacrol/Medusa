from filterdataset.main import Filterer

# filterer = Filterer()
filterer = Filterer(attributes_file='python/training/dataset/attributes.txt')
filenames = filterer.get_filenames(attributes=('Black_Hair', '5_o_Clock_Shadow'))

print(filenames[0:10])
print(filenames[0:-10])
print(filenames['label'])
print(filenames['filename'])
print(filenames.shape)
