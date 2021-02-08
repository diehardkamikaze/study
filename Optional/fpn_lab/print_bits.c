#include <limits.h>
#include <stdio.h>

void	print_bits(unsigned long long val, int nbits)
{
	if (nbits != 0)
	{
		print_bits(val >> 1, nbits - 1);
		printf("%lld", val & 1);
	}
}

int main(void)
{
	float t  = 0.0 / 0.0;//3.125f;
	void *k = (void *)&t;
	print_bits((*(unsigned long long *)k), 32);
	return (0);
}
